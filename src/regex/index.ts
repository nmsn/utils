const cnName = /^[\u4e00-\u9fa5·]+$/;

const money = /^-?\d+(,\d{3})*(\.\d+)?$/;

const naturalNumber = /^(0|[1-9]\d*)$/;

const int = /^(?:0|(?:-?[1-9]\d*))$/;

const positiveInt = /^\+?[1-9]\d*$/;

const mobile = /^[1](([3]|[4]|[5]|[6]|[7]|[8]|[9])[0-9])[0-9]{8}$/u;

const thousand = /\B(?=(\d{3})+(?!\d))/g;

const suffix = /(\.)(\w+)$/;

const regex = {
  cnName,
  money,
  naturalNumber,
  int,
  positiveInt,
  mobile,
  thousand,
  suffix,
};

export default regex;
