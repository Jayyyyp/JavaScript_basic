function add(n1, n2){
    return n1 + n2; // ��ȯ��

    console.log(`���� �ȵȴ�`);
}

// ��ȯ�� : �Լ� ȣ���� ����� �� ȣ�� ��ġ�� ���޵� ��
var r1 = add(5, 7);
console.log(r1);

console.log(add(r1, add(3, 5)));

// ������ ���� void ���� �Լ�
// function showMulth(n1, n2){
//     console(`${n1} * ${n2} = ${n1 * n2}`);
// }
// var result = showMulth(3, 5);
// console.log(result);

// return�� Ż�⹮���� ���� ����
function question(answer){
    if(answer !== 5050){
        console.log(`��� �ȹٷ� ���մϱ�?`);
        return;
    }
    console.log("�����Դϴ�!");
}
console.log(`1���� 100���� ���� �����?`);
question(5050);
question(5049);