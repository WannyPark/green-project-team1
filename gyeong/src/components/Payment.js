import React, { useEffect } from 'react';

function Payment() {
  useEffect(() => {
    // 결제 API 스크립트 로드
    const iamportScript = document.createElement('script');
    iamportScript.src = 'https://cdn.iamport.kr/v1/iamport.js';
    iamportScript.async = true;
    document.head.appendChild(iamportScript);

    // Payment.js 스크립트 로드
    const paymentScript = document.createElement('script');
    paymentScript.src = '/Payment.js';
    paymentScript.async = true;
    document.head.appendChild(paymentScript);

    return () => {
      // 컴포넌트 언마운트 시에 스크립트 정리 (옵션)
      document.head.removeChild(iamportScript);
      document.head.removeChild(paymentScript);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨

  const handlePayNow = () => {
    // 버튼 클릭 시 결제 플로우 시작
    // Payment.js에 정의된 결제 로직을 호출하거나 사용자 정의 로직을 여기에 추가
    // 예시: window.startPayment();
  };

  return (
    <div>
      <button onClick={handlePayNow}>Pay now!</button>
    </div>
  );
}

export default Payment;
