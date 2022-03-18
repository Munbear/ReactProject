// 외부 파일 이용시 declare & 이상한 특징인 ambient module
//변수 재정의가 가능한 declare문법
// 외부 자바스크립트 에서 가져온 파일 재정의 할때
declare let a;

// declare정의한 내용은 js로 변환되지 않음
import {Age} from './test'
// import as * a from './test.d'
let age :Age;



