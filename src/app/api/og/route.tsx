import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams, origin } = req.nextUrl;
    
    // Dynamic values with fallbacks
    const title = searchParams.get('title') || 'Wholesale Research Peptides';
    let desc = searchParams.get('desc') || 'Premium U.S.-manufactured peptides for licensed professionals and clinics. >=99.0% purity with batch-matched COAs.';
    
    // Fix missing font character for ≥ symbol in Satori's default font
    desc = desc.replace(/≥/g, '>=');

    const category = searchParams.get('category') || 'B2B Wholesale Catalog';

    // The background image we generated
    const bgUrl = `${origin}/images/og-bg-cyan.png`;
    const logoUrl = `${origin}/images/99pw-logo.png`;

    // Fetch fonts using Next.js Edge asset resolution to prevent localhost fetch failures
    const rajdhaniFont = await fetch(new URL('../../../../public/fonts/Rajdhani-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#05080C',
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: '1200px 1200px',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            padding: '60px 80px',
          }}
        >
          {/* Glassmorphism Card Overlay on the left side */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'rgba(5, 8, 12, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '50px',
              width: '75%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Tag / Category */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#00E5FF',
                  color: '#000',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: '"Rajdhani"',
                }}
              >
                {category}
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '24px',
                textTransform: 'uppercase',
                fontFamily: '"Rajdhani"',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '28px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.4,
                fontWeight: 500,
                marginBottom: '40px',
              }}
            >
              {desc}
            </div>

            {/* Branding / Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 'auto',
              }}
            >
              <img 
                src={logoUrl} 
                alt="99 Purity Wholesale" 
                style={{ height: '45px', objectFit: 'contain' }} 
              />
              <div
                style={{
                  marginLeft: '24px',
                  color: 'rgba(255, 255, 255, 0.4)',
                  fontSize: '20px',
                  fontWeight: 500,
                  borderLeft: '1px solid rgba(255,255,255,0.2)',
                  paddingLeft: '24px'
                }}
              >
                U.S. DOMESTIC SUPPLY
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Rajdhani',
            data: rajdhaniFont,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error('OG Image Generation Error:', e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
