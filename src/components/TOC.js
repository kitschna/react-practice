import React, { Component } from 'react';

class TOC extends Component{
  render() {
    return (
      <nav>
			<ul>
				<li><a href="1.html">HTML</a></li>
				<li><a href="2.html">CSS</a></li>
				<li><a href="3.html">JavaScript</a></li>
			</ul>
		</nav>
    )
  }
}

export default TOC; 

// TOC 에는 여러가지 변수나 함수가 존재할 수 있다.
// 그 많은 것들 중에서 어떤 것을 외부에서 사용할 수 있게 허용하고 싶다면,
// 위 export default TOC 이다.
// 이해가 안간다면, 일달 외워두자.