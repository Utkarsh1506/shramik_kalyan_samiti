import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Jharkhand Shramik Kalyan Samiti';
export const size = {
  width: 1200,
  height: 600,
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
              fontSize: 76,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            JHARKHAND SHRAMIK KALYAN SAMITI
          </div>
          <div
            style={{
              width: 360,
              height: 3,
              background: '#60a5fa',
              borderRadius: 2,
              marginBottom: 30,
            }}
          />
          <div
            style={{
              fontSize: 32,
              color: '#93c5fd',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Mining Welfare • Compliance • Technology
          </div>
          <div
            style={{
              fontSize: 26,
              color: '#dbeafe',
              textAlign: 'center',
            }}
          >
            Empowering Workers | Building Communities
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
