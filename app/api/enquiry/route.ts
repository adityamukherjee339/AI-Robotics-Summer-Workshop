import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Connect to database
    await dbConnect();

    // Create and save new enquiry
    const enquiry = await Enquiry.create(body);

    // Return success response
    return NextResponse.json(
      { message: 'Enquiry submitted successfully!', data: enquiry },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error saving enquiry:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
