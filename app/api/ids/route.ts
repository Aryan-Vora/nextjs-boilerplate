import { NextRequest, NextResponse } from 'next/server';
import { getIds } from '@/lib/db';

export async function GET() {
  try {
    const ids = await getIds();
    return NextResponse.json({ success: true, data: ids });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch IDs' },
      { status: 500 }
    );
  }
}
