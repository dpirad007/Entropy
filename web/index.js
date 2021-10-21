import init, {
  SeriesF64,
  SeriesI32,
  DataFrame,
  SeriesSTR,
} from "../pkg/entropy.js";

(async () => {
  await init();

  // performanceDemo();
  console.group(
    "%cSeries",
    "color: white; background-color: darkblue; padding: 5px 10px; border-radius: 5px"
  );
  seriesDemo();
  console.groupEnd();

  console.group(
    "%cDataFrame",
    "color: white; background-color: darkblue; padding: 5px 10px; border-radius: 5px"
  );
  dataframeDemo();
  console.groupEnd();
})();

const performanceDemo = () => {
  const t0 = performance.now();

  let s = SeriesI32.newWithSimpleFunc(
    "SeriesI32",
    10000000,
    (max = 10, min = 1) => Math.random() * (max - min) + min
  );
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

  // console.log(s.data());
};

const dataframeDemo = async () => {
  let file = await fetch("../data/hwi.csv");

  console.group("DataFrame");

  let sera = new SeriesI32("Apples", [1, 2, 3, 4]);
  let sero = new SeriesF64("Orange", [1.1, 2.1, 3.1, 4.1]);
  let serb = new SeriesSTR("Banana", ["ban", "nan", "qs", "rty"]);

  console.log("DataFrame");
  let df = new DataFrame([sera.toJson(), sero.toJson(), serb.toJson()]);

  // console.log(df.columns());

  // console.log(df.displayTable);
  console.log(df.display);
  console.groupEnd();
};

window.dataframeDemo = dataframeDemo;

const seriesDemo = () => {
  console.group("SeriesI32");

  let s1 = new SeriesI32("Fibonacci", [0, 1, 1, 2]);
  let s2 = new SeriesF64("B", [0.3, 1.3, 1.3, 2.3]);
  let s3 = new SeriesSTR("C", ["A", "A"]);
  console.log(s1.display);
  console.log(s2.display);
  console.log(s3.display);
  // console.log("SeriesI32");
  // console.log(s1.data());

  // console.log(s1.shape());
  // console.log(s2.shape());
  // console.log(s3.shape());
  // console.log(s1.toString());
  // console.log(s2.toString());
  // console.log(s3.toString());
  // let s4 = SeriesI32.newWithElement("Dion", 5, 7);
  // let s5 = SeriesF64.newWithElement("Dion", 5, 7.5);
  // let s6 = SeriesI32.newWithSimpleFunc(
  //   "Pinto",
  //   10,
  //   (max = 10, min = 2) => Math.random() * (max - min) + min
  // );
  // console.log(s6.data());

  // console.log("SeriesI32 length");
  // console.log(s.len());

  // console.log("SeriesI32 get at index 2 (0 based)");
  // console.log(s.get(2));

  // console.log("SeriesI32 set at index (0) value (11)");
  // s.set(0, 9);
  // console.log(s.display);

  // console.log("SeriesI32 swap values between index (0) and index (1)");
  // s.swap(0, 1);
  // console.log(s.display);

  // console.log("SeriesI32 reverse (without return)");
  // s.reverse();
  // console.log(s.display);

  // console.log("SeriesI32 reversed (with return)");
  // console.log(s.reversed().data);

  // console.log("SeriesI32 append (without return)");
  // s.append(88);
  // console.log(s.display);

  // console.log("SeriesI32 appended (with return)");
  // console.log(s.appended(33).data);

  // console.log("SeriesI32 extend (extend data in series) (without return)");
  // s.extend([44, 44]);
  // console.log(s.display);

  // console.log("SeriesI32 extended (extend data in series) (with return)");
  // console.log(s.extended([55, 55]).data);

  // console.log(
  //   "SeriesI32 insert at index put value push rest by one (without return)"
  // );
  // s.insert(0, 99);
  // console.log(s.display);

  // console.log(
  //   "SeriesI32 inserted at index put value push rest by one (with return)"
  // );
  // console.log(s.inserted(0, 11).data);
  // console.log(s.display);
  // console.log(
  //   "SeriesI32 splice remove the value at the specified index and return the result"
  // );
  // console.log(s.splice(0));

  // console.log(
  //   "SeriesI32 splice remove the value at the specified index and return the array"
  // );
  // console.log(s.spliced(6)[0].data);

  // console.group("SeriesI32 Math Operations");
  // console.log("SeriesI32 sum");
  // console.log(s.sum());

  // console.log("SeriesI32 product");
  // console.log(s.product());

  // console.log("SeriesI32 mean");
  // console.log(s.mean());

  // console.log("SeriesI32 median");
  // console.log(s.median());

  // console.log("SeriesI32 max");
  // console.log(s.max());

  // console.log("SeriesI32 min");
  // console.log(s.min());

  // console.log("SeriesI32 std_dev");
  // console.log(s.std_dev(1));

  // console.log("SeriesI32 varience");
  // console.log(s.variance(1));

  // console.groupEnd();

  // console.groupEnd();

  // console.group("SeriesF64");
  // let serf1 = new SeriesF64("Floating", [1.1, 2.2, 3.3, 4.4]);
  // console.log("SeriesF64");
  // console.log(serf1.display);

  // console.log("SeriesF64 length");
  // console.log(serf1.len());

  // console.log("SeriesF64 get at index 2 (0 based)");
  // console.log(serf1.get(2));

  // console.log("SeriesF64 set at index (0) value (11.11)");
  // serf1.set(0, 11.11);
  // console.log(serf1.display);

  // console.log("SeriesF64 swap values between index (0) and index (1)");
  // serf1.swap(0, 1);
  // console.log(serf1.display);

  // console.log("SeriesF64 reverse (without return)");
  // serf1.reverse();
  // console.log(serf1.display);

  // console.log("SeriesF64 reversed (with return)");
  // console.log(serf1.reversed().data);

  // console.log("SeriesF64 append (without return)");
  // serf1.append(22.2);
  // console.log(serf1.display);

  // console.log("SeriesF64 appended (with return)");
  // console.log(serf1.appended(33.3).data);

  // console.log("SeriesF64 extend (extend data in series) (without return)");
  // serf1.extend([44.4, 44.4]);
  // console.log(serf1.display);

  // console.log("SeriesF64 extended (extend data in series) (with return)");
  // console.log(serf1.extended([55, 55]).data);

  // console.log(
  //   "SeriesF64 insert at index put value push rest by one (without return)"
  // );
  // serf1.insert(0, 55.5);
  // console.log(serf1.display);

  // console.log(
  //   "SeriesF64 inserted at index put value push rest by one (with return)"
  // );
  // console.log(serf1.inserted(0, 11.1).data);

  // console.log(
  //   "SeriesF64 splice remove the value at the specified index and return the result"
  // );
  // console.log(serf1.splice(5));

  // console.log(
  //   "SeriesF64 splice remove the value at the specified index and return the array"
  // );
  // console.log(serf1.spliced(6)[0].data);

  // console.group("SeriesF64 Math Operations");
  // console.log("SeriesF64 sum");
  // console.log(serf1.sum());

  // console.log("SeriesF64 product");
  // console.log(serf1.product());

  // console.log("SeriesF64 mean");
  // console.log(serf1.mean());

  // console.log("SeriesF64 median");
  // console.log(serf1.median());

  // console.log("SeriesF64 max");
  // console.log(serf1.max());

  // console.log("SeriesF64 min");
  // console.log(serf1.min());

  // console.groupEnd();

  // console.groupEnd();

  // console.group("SeriesSTR");
  // let sers1 = new SeriesSTR("StringSTR", ["abc", "cbe", "rty", "qwe"]);
  // console.log("SeriesSTR");
  // console.log(sers1.display);

  // console.log("SeriesSTR length");
  // console.log(sers1.len());

  // console.log("SeriesSTR get at index 2 (0 based)");
  // console.log(sers1.get(2));

  // console.log("SeriesSTR set at index (0) value (yoy)");
  // sers1.set(0, "yoy");
  // console.log(sers1.display);

  // console.log("SeriesSTR swap values between index (0) and index (1)");
  // sers1.swap(0, 1);
  // console.log(sers1.display);

  // console.log("SeriesSTR reverse (without return)");
  // sers1.reverse();
  // console.log(sers1.display);

  // console.log("SeriesSTR reversed (with return)");
  // console.log(sers1.reversed().data);

  // console.log("SeriesSTR append (without return)");
  // sers1.append("opo");
  // console.log(sers1.display);

  // console.log("SeriesSTR appended (with return)");
  // console.log(sers1.appended("vov").data);

  // console.log("SeriesSTR extend (extend data in series) (without return)");
  // sers1.extend(["yui", "iop"]);
  // console.log(sers1.display);

  // console.log("SeriesSTR extended (extend data in series) (with return)");
  // console.log(sers1.extended(["cvb", "bnm"]).data);

  // console.log(
  //   "SeriesSTR insert at index put value push rest by one (without return)"
  // );
  // sers1.insert(0, "zxc");
  // console.log(sers1.display);

  // console.log(
  //   "SeriesSTR inserted at index put value push rest by one (with return)"
  // );
  // console.log(sers1.inserted(0, "fgh").data);

  // console.log(
  //   "SeriesSTR splice remove the value at the specified index and return the result"
  // );
  // console.log(sers1.splice(5));

  // console.log(
  //   "SeriesSTR splice remove the value at the specified index and return the array"
  // );
  // console.log(sers1.spliced(6)[0].data);

  console.groupEnd();
};
