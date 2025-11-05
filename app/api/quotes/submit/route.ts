import { NextRequest, NextResponse } from 'next/server';
import type { QuoteFormData } from '@/types/quote-templates';

export async function POST(request: NextRequest) {
  try {
    const data: QuoteFormData = await request.json();

    // Validate required fields
    if (!data.serviceId || !data.zipCode || !data.contact) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate contact info
    const { firstName, lastName, email, phone } = data.contact;
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Incomplete contact information' },
        { status: 400 }
      );
    }

    // Generate quote ID
    const quoteId = `QO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // TODO: Save to database
    // For now, we'll just log and return success
    console.log('Quote submission:', {
      quoteId,
      service: data.serviceName,
      zip: data.zipCode,
      contact: data.contact,
      answers: data.answers
    });

    // TODO: Implement these features:
    // 1. Save to MongoDB/database
    // 2. Match with providers based on:
    //    - Service type
    //    - ZIP code coverage
    //    - Provider availability
    // 3. Send email notification to user (Resend)
    // 4. Send lead notification to matched providers
    // 5. Add to CRM/marketing lists based on answers
    // 6. Trigger SMS follow-up if applicable

    // Example: Determine which lists to add user to
    const lists = [];
    
    // Homeowner list
    if (data.answers['home-owner'] === true || data.answers['property-owner'] === 'yes') {
      lists.push('homeowners');
    }
    
    // Veteran list
    if (data.answers['veteran'] === true || data.answers['military-service'] === 'yes') {
      lists.push('veterans');
    }
    
    // Health insurance interest
    if (data.answers['health-insurance-interest'] === true) {
      lists.push('health-insurance-leads');
    }
    
    // All quote requests go to general campaign list
    lists.push('quote-requests');

    console.log('User should be added to lists:', lists);

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      quoteId,
      message: 'Quote request submitted successfully',
      nextSteps: {
        expectedResponseTime: '24 hours',
        providersMatched: 3, // This would be real data from matching logic
        lists // Include for debugging/logging
      }
    });

  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
