# Call Now Step - Implementation Guide

## Overview

The Call Now Step is a conversion-optimized final step in the quote request flow designed to drive immediate phone calls after form submission. It uses urgency, FOMO (Fear of Missing Out), and social proof tactics to maximize call conversions.

## Features

### 1. **Urgency & Scarcity**
- Countdown timer showing limited-time offers
- "Promotion ends in X hours" messaging
- Time-sensitive language throughout

### 2. **FOMO (Fear of Missing Out)**
- Real-time agent availability indicator
- "X agents available right now" messaging
- Live pulse animations for availability
- Priority service messaging

### 3. **Social Proof**
- Customer testimonials
- 5-star ratings display
- "Others are calling now" messaging

### 4. **Clear Call-to-Action**
- Large, prominent call button
- Click-to-call phone number
- Mobile-optimized dialer integration

### 5. **Value Reinforcement**
- List of benefits for calling now
- "Why call?" section
- Expedite service messaging

## Components

### `CallNowStep.tsx`
**Full-featured component** with all bells and whistles:
- Countdown timer
- Agent availability indicator
- Social proof elements
- Testimonials
- Benefits list
- Trust indicators
- Animated success checkmark

**Use when:** You want maximum conversion optimization

### `CallNowStepSimple.tsx`
**Simplified component** with core features:
- Basic urgency messaging
- Call button
- Phone number
- Minimal design

**Use when:** You want a cleaner, less aggressive approach or embedding in thank-you pages

## Configuration

### Template Configuration

Add `callNow` configuration to any `QuoteTemplate`:

```typescript
import { QuoteTemplate } from '@/types/quote-templates';

export const myServiceTemplate: QuoteTemplate = {
  serviceId: 'my-service',
  serviceName: 'My Service',
  serviceSlug: 'my-service',
  vertical: 'home',
  
  // Call Now configuration
  callNow: {
    enabled: true,
    phoneNumber: '(888) 555-1234',
    urgencyMessage: 'This promotion ends in 3 hours',
    agentMessage: 'We have 2 agents available right now to take your call.',
    showTimer: true,
    timerMinutes: 180, // 3 hours
    buttonText: 'CALL NOW',
    skipButtonText: "I'll call later"
  },
  
  steps: [
    // ... your quote flow steps
  ]
};
```

### Configuration Options

```typescript
interface CallNowConfig {
  enabled: boolean;              // Turn feature on/off
  phoneNumber: string;           // Phone number to call (with formatting)
  urgencyMessage: string;        // Main urgency message
  agentMessage?: string;         // Agent availability message (optional)
  showTimer?: boolean;           // Show countdown timer (default: false)
  timerMinutes?: number;         // Minutes for countdown (default: 180)
  buttonText?: string;           // CTA button text (default: "Call Now")
  skipButtonText?: string;       // Skip button text (default: "I'll Call Later")
}
```

## Usage Examples

### Example 1: Insurance (High Urgency)

```typescript
callNow: {
  enabled: true,
  phoneNumber: '(888) 555-0123',
  urgencyMessage: 'Special offer expires in 3 hours - Call now to lock in your rate!',
  agentMessage: 'We have 2 licensed insurance agents available right now.',
  showTimer: true,
  timerMinutes: 180,
  buttonText: 'CALL NOW TO LOCK IN RATE',
  skipButtonText: 'Continue without calling'
}
```

### Example 2: Home Services (Moderate Urgency)

```typescript
callNow: {
  enabled: true,
  phoneNumber: '(888) 555-ROOF',
  urgencyMessage: 'Limited contractor availability - Call in the next 2 hours for priority scheduling!',
  agentMessage: '3 certified roofing specialists are standing by.',
  showTimer: true,
  timerMinutes: 120,
  buttonText: 'CALL NOW FOR PRIORITY SERVICE'
}
```

### Example 3: Emergency Services (Maximum Urgency)

```typescript
callNow: {
  enabled: true,
  phoneNumber: '(888) EMERGENCY',
  urgencyMessage: 'Emergency response available - Call NOW for immediate dispatch!',
  agentMessage: 'Emergency operators standing by 24/7.',
  showTimer: false, // No timer for emergencies
  buttonText: '🚨 CALL EMERGENCY LINE NOW'
}
```

### Example 4: Soft Approach (Low Pressure)

```typescript
callNow: {
  enabled: true,
  phoneNumber: '(888) 555-1234',
  urgencyMessage: 'Speak with an expert today to get personalized recommendations',
  agentMessage: 'Our team is ready to help you.',
  showTimer: false,
  buttonText: 'Call to Speak with Expert',
  skipButtonText: 'View quotes online instead'
}
```

## Integration with Quote Flow

### Option 1: As Final Step in Flow Engine

When building your `QuoteFlowEngine.tsx`, check for `callNow` config after final step:

```typescript
import CallNowStep from '@/components/quote-flow/CallNowStep';

function QuoteFlowEngine({ template }: { template: QuoteTemplate }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showCallNow, setShowCallNow] = useState(false);
  
  const handleFormComplete = () => {
    // Form submitted successfully
    if (template.callNow?.enabled) {
      setShowCallNow(true);
    } else {
      // Show standard thank you page
      showThankYou();
    }
  };
  
  if (showCallNow && template.callNow) {
    return (
      <CallNowStep
        config={template.callNow}
        serviceName={template.serviceName}
        onSkip={() => showThankYou()}
        onComplete={() => showThankYou()}
      />
    );
  }
  
  // ... render regular flow steps
}
```

### Option 2: On Thank You Page

Embed the simple version in your thank-you page:

```typescript
import CallNowStepSimple from '@/components/quote-flow/CallNowStepSimple';

function ThankYouPage({ template }: { template: QuoteTemplate }) {
  return (
    <div className="container mx-auto p-8">
      <h1>Thank You!</h1>
      <p>Your quote request has been submitted.</p>
      
      {template.callNow?.enabled && (
        <div className="mt-8">
          <CallNowStepSimple
            config={template.callNow}
            serviceName={template.serviceName}
            onComplete={() => console.log('Call initiated')}
          />
        </div>
      )}
    </div>
  );
}
```

## Analytics Tracking

Both components automatically track events:

### Events Tracked

1. **call_now_clicked** - When user clicks call button
   ```javascript
   {
     event: 'call_now_clicked',
     service: 'Roofing',
     phone: '(888) 555-ROOF'
   }
   ```

2. **call_now_skipped** - When user skips calling
   ```javascript
   {
     event: 'call_now_skipped',
     service: 'Roofing'
   }
   ```

### Custom Tracking

Add your own tracking:

```typescript
<CallNowStep
  config={template.callNow}
  serviceName={template.serviceName}
  onComplete={() => {
    // Track conversion
    trackEvent('call_conversion', {
      service: template.serviceName,
      vertical: template.vertical
    });
  }}
  onSkip={() => {
    // Track skip
    trackEvent('call_skipped', {
      service: template.serviceName
    });
  }}
/>
```

## Best Practices

### 1. **Choose Appropriate Urgency Level**
- **Insurance:** High urgency (rates expiring, limited-time offers)
- **Emergency services:** Maximum urgency (immediate need)
- **Consultations:** Low urgency (helpful guidance)
- **Scheduled services:** Moderate urgency (availability-based)

### 2. **Phone Number Formatting**
- Use memorable formats: `(888) 555-ROOF`
- Or standard: `(888) 555-1234`
- Include area code
- Make it clickable on mobile

### 3. **Timer Duration Guidelines**
- **1-2 hours:** Emergency or high-value services
- **3-4 hours:** Standard promotions
- **24 hours:** Soft urgency for consultations
- **No timer:** When urgency isn't appropriate

### 4. **Agent Availability Messaging**
- Be honest about availability
- Use specific numbers: "2 agents" not "several agents"
- Include qualifications: "licensed," "certified," "specialists"
- Add response time: "Average wait under 30 seconds"

### 5. **Button Copy**
- Action-oriented: "CALL NOW"
- Benefit-focused: "CALL TO LOCK IN RATE"
- Service-specific: "CALL FOR PRIORITY SERVICE"
- Use uppercase for emphasis
- Include emojis sparingly: 📞 🚨

### 6. **Skip Button Strategy**
- Make it less prominent but still accessible
- Use neutral language: "I'll call later"
- Consider removing for high-intent services
- Track skip rate to optimize messaging

### 7. **Mobile Optimization**
- Components are mobile-first by default
- Click-to-call works automatically on mobile
- Large, touch-friendly buttons
- Readable text on small screens

## A/B Testing Ideas

### Test 1: Timer vs No Timer
```typescript
// Variant A: With timer
callNow: { showTimer: true, timerMinutes: 180 }

// Variant B: Without timer
callNow: { showTimer: false }
```

### Test 2: Urgency Level
```typescript
// Variant A: High urgency
urgencyMessage: 'This offer expires in 3 hours!'

// Variant B: Moderate urgency
urgencyMessage: 'Limited availability - call today!'

// Variant C: Low urgency
urgencyMessage: 'Speak with an expert at your convenience'
```

### Test 3: Agent Numbers
```typescript
// Variant A: Specific number
agentMessage: 'We have 2 agents available right now.'

// Variant B: General availability
agentMessage: 'Our team is ready to help you.'

// Variant C: No agent message
agentMessage: undefined
```

### Test 4: Button Copy
```typescript
// Variant A: Simple
buttonText: 'CALL NOW'

// Variant B: Benefit-focused
buttonText: 'CALL NOW TO LOCK IN RATE'

// Variant C: Urgency-focused
buttonText: 'CALL BEFORE TIME RUNS OUT'
```

## Conversion Optimization Tips

### Increase Call Rates:
1. **Show countdown timer** - Creates urgency
2. **Use specific numbers** - "2 agents" beats "agents available"
3. **Add social proof** - Testimonials, ratings
4. **Emphasize benefits** - "Priority service," "Lock in rate"
5. **Make phone number prominent** - Large, clickable
6. **Use animations** - Pulsing indicators, bounce effects
7. **Create FOMO** - "Others are calling now"

### Balance with User Experience:
1. **Don't be too aggressive** - Can backfire
2. **Provide skip option** - But make less prominent
3. **Be honest** - Don't fake scarcity
4. **Match message to service** - Insurance ≠ Emergency
5. **Test different approaches** - What works for your audience

## Technical Implementation

### Add to Existing Template

1. **Update template file:**
   ```typescript
   // lib/quote-templates/my-vertical-services.ts
   export const myTemplate: QuoteTemplate = {
     // ... existing config
     callNow: {
       enabled: true,
       phoneNumber: '(888) 555-1234',
       urgencyMessage: 'Your message here',
       // ... other options
     },
     steps: [/* ... */]
   };
   ```

2. **Import component in flow engine:**
   ```typescript
   import CallNowStep from '@/components/quote-flow/CallNowStep';
   ```

3. **Render after form completion:**
   ```typescript
   if (formComplete && template.callNow?.enabled) {
     return <CallNowStep config={template.callNow} ... />;
   }
   ```

### Styling Customization

Both components use Tailwind CSS. Customize by:

1. **Modifying colors:**
   ```typescript
   // Change green to your brand color
   className="bg-blue-600 hover:bg-blue-700"
   ```

2. **Adjusting animations:**
   ```typescript
   // Customize bounce animation
   className="animate-bounce" // or animate-pulse, etc.
   ```

3. **Changing layout:**
   ```typescript
   // Modify max-width, padding, etc.
   className="max-w-xl p-6"
   ```

## Troubleshooting

### Timer Not Counting Down
- Check `showTimer: true` in config
- Verify `timerMinutes` is set
- Ensure component is mounted (not recreated)

### Phone Number Not Clickable
- Use proper `tel:` link format
- Check phone number formatting
- Test on actual mobile device

### Agent Count Not Changing
- Simulated by default (changes every 30s)
- Replace with real API call if needed

### Skip Button Not Working
- Ensure `onSkip` prop is provided
- Check handler function is defined
- Verify skip button renders (may be hidden in some configs)

## Future Enhancements

Potential additions:
- [ ] SMS option alongside call
- [ ] Schedule callback form
- [ ] Live chat integration
- [ ] Real agent availability API
- [ ] Geolocation-based phone numbers
- [ ] Language-specific messaging
- [ ] Video call option
- [ ] WhatsApp/Telegram integration

---

**Last Updated:** 2025-01-05  
**Version:** 1.0  
**Status:** ✅ Ready to Use
