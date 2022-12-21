/*
２．以下の機能を実現するプログラム（クラスを使ってください）を作成してください。
  ・父の財布、母の財布を用意し、それぞれの財布に対して以下のことを行えるようにしてください。
   ※将来、自分の財布も用意できるようにしておくこと。
  ・財布に、お金を入れることができること。
   ※扱えるお金の単位は、１００円、１０００円とします。
   ※お金を入れる際は、上記の単位と、枚数を指定して入金するものとします。
   ※財布は単位毎にポケットが違うため、１００円が30枚まで、1000円が50枚まで保持することが可能とします。
   ※入金額が上記上限を超えた場合は、上限までを保持するものとし、残金は返金してください。
  ・財布から、お金を引き出すことができること。
   ※残高以上の金額を引き出そうとした場合は、残高分までしか引き出せないこと。
   ※残高が0円の場合は、0円を引き出せること。
  ・現在の財布の残高を確認できること。
  ・財布は、用意した時点で1000円が1枚入っているようにしてください。

２．１．上記で作成したプログラムに対して、以下の操作を行うプログラムを作成してください。
  ・父の財布に、1000円を15枚入金。
  ・母の財布に、100円を20枚入金。
  ・母の財布に、100円を5枚入金。
  ・母の財布から、500円を引き出し、父の財布に入金する。
  ・この時の母の財布と父の財布の残高を表示してください。
*/
class Wallet {

    constructor() {
        this.hundredMoney = 0;
        this.hundredCoins = 0;
        this.thousandMoney = 1000;
        this.thousandCoins = 0;
    }

    capacityHundred(hundredCoins) { // 財布にお金を入れることができる100円
        if (hundredCoins > 30) {
            this.hundredCoins += 30
            const overHundredCoins = hundredCoins - this.hundredCoins
            this.hundredMoney += this.hundredCoins * 100
            console.log(overHundredCoins * 100 + "円を返金します");
        } else {
            this.hundredCoins += hundredCoins
            this.hundredMoney += hundredCoins * 100
        }
    }
    capacityThousand(thousandCoins) { // 財布にお金を入れることができる1000円
        if (thousandCoins > 50) {
            this.thousandCoins += 50
            const overThousandCoins = thousandCoins - this.thousandCoins
            this.thousandMoney += this.thousandCoins * 1000
            console.log(overThousandCoins * 1000 + "円を返金します");
        } else {
            this.thousandCoins += thousandCoins
            this.thousandMoney += thousandCoins * 1000
        }
    }

    pickUpHundred(useHundred) { // 財布からお金を引き出すことができる100円
        if (this.hundredMoney < useHundred) {
            const hundredMoney = this.hundredMoney;
            console.log(this.hundredMoney + '円を引き出します');
            this.hundredMoney = 0;
            return hundredMoney / 100;
        } else if (this.hundredMoney == 0) {
            console.log(this.hundredMoney + '円を引き出します');
            return this.hundredMoney;
        } else {
            this.hundredMoney = this.hundredMoney - useHundred;
            return useHundred / 100;
        }
    }

    pickUpThousand(useThousand) { // 財布からお金を引き出すことができる1000円
        if (this.thousandMoney < useThousand) {
            const thousandMoney = this.thousandMoney;
            console.log(this.thousandMoney + '円を引き出します');
            this.thousandMoney = 0;
            return thousandMoney / 1000;
        } else if (this.thousandMoney == 0) {
            this.thousandMoney = 0;
            console.log(this.thousandMoney + '円を引き出します');
            return this.thousandMoney;
        } else {
            this.thousandMoney = this.thousandMoney - useThousand;
            return useThousand / 1000;
        }
    }

    all() {
        let walletMoney = this.hundredMoney + this.thousandMoney;
        console.log(walletMoney);
    }
}

const walletFather = new Wallet();
walletFather.capacityThousand(15);
const walletMother = new Wallet();
walletMother.capacityHundred(20);
walletMother.capacityHundred(5);
walletFather.capacityHundred(walletMother.pickUpHundred(500));
walletFather.all();
walletMother.all();



