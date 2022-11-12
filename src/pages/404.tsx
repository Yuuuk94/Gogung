import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">돌아가기</Link>
    </div>
  );
}

export default NotFound;
