export function getRandomColor() {
  const colors = [
    "#CDCC33",
    "#FFCC99",
    "#FF01FF",
    "#729B00",
    "#9099FF",
    "#FF3333",
  ];

  // 0 부터 12까지 랜덤 숫자
  const random = Math.floor(Math.random() * 6);

  // 랜덤 색상 반환
  return colors[random];
}
