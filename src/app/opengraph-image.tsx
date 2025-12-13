import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Jharkhand Shramik Kalyan Samiti - Mining Welfare Trust';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            JHARKHAND SHRAMIK
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            KALYAN SAMITI
          </div>
          <div
            style={{
              width: 400,
              height: 4,
              background: '#60a5fa',
              borderRadius: 2,
              marginBottom: 40,
            }}
          />
          <div
            style={{
              fontSize: 36,
              color: '#93c5fd',
              textAlign: 'center',
              marginBottom: 30,
            }}
          >
            Technology-Driven Mining Welfare Solutions
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#dbeafe',
              textAlign: 'center',
            }}
          >
            Compliance • Welfare • Technology
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
