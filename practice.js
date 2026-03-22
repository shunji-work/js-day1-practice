// 課題1
// 2つの数字を受け取って、合計を返す関数
// 例:
// 入力: 2, 3
// 出力: 5
function plus(a, b) {
  return a + b;
}

console.log(plus(4, 19));

/*
課題2
数字を受け取って、偶数なら "偶数"、奇数なら "奇数" を返す関数
例:
入力: 4
出力: "偶数"
*/
function delta(a) {
  if (a % 2 == 0) {
    return "偶数";
  } else {
    return "奇数";
  }
}


/* 
課題3
点数を受け取って、60点以上なら "合格"、それ未満なら "不合格" を返す関数
例:
入力: 75
出力: "合格"
ここでは、
関数
引数
return
if
を使います。
 */
function judgeScore(a){
  if(a >= 60){
    return "合格";
  }
  else{
    return "不合格"; 
  }
}

/* 
課題4
年齢を受け取って、
18未満なら "未成年"
18以上65未満なら "成人"
65以上なら "高齢者"
を返す関数を書く
 */

function judgeAge(a) {
  if (a < 18) {
    return "未成年";
  }
  else if (a < 65){
    return "成人";
  }
  else {
    return "高齢者";
  }
}

/* 
課題5
商品の金額を受け取って、
1000円以上なら 10%引き
1000円未満ならそのまま
割引後の金額を返す関数を書く
これは後で麻雀アプリの「条件によって結果を変える」感覚に繋がります。
 */
function discount(a){
  if (a >= 1000){
    const newCount = a * 0.9;
    return newCount;
  }
  else{
    return a;
  }
}

/* 
課題6
60点以上の数字だけを抜き出す
使うもの:
filter
期待結果:
[60, 80]
使う配列:const scores = [10, 25, 60, 80, 45];
 */
const scores = [10, 25, 60, 80, 45];
const newScore = scores.filter((num) => {
  return num >= 60;
});
console.log(newScore);