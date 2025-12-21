import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Webinar from '@/models/Webinar';

export async function GET(request) {

    await dbConnect();

    try {

        const webinarData = await Webinar.findOne({ isActive: true }).select('-__v -createdAt -updatedAt -basePriceUSD -indiaPriceINR');

        if (!webinarData) {
            return NextResponse.json({ error: 'No active webinar found' }, { status: 404 });
        }

        return NextResponse.json({ webinar: webinarData }, { status: 200 });

    } catch (error) {

        return NextResponse.json({ error: 'Failed to fetch webinar data' }, { status: 500 });

    }

}
