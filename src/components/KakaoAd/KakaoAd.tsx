import { useEffect, useRef } from 'react';
import KakaoAdCallback from './KakaoAdCallback';

const KakaoAd = () => {
  const scriptElement = useRef<HTMLDivElement>(null);

  // script 태그를 동적으로 추가
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
    script.setAttribute('charset', 'utf-8');

    script.setAttribute('async', 'true');
    scriptElement.current?.appendChild(script);
  }, []);

  return (
    <>
      ...
      <div ref={scriptElement}>
        <ins
          className='kakao_ad_area'
          style={{ display: 'none' }}
          data-ad-unit='DAN-ZAZ2jcyFWckRtcrp'
          data-ad-width='320'
          data-ad-height='50'
          data-ad-onfail={<KakaoAdCallback />}
        />
      </div>
    </>
  );
};

export default KakaoAd;
