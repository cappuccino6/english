import Image from "next/image";
import { BaseConfig } from "./constant";
import Questionare from "./components/questionaire";
import './style/reset.css';
import './style/index.css';

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
      <main className={`main w-full h-full`}>
        <div className="title flex justify-center text-center bold">
          四六级教材自查
        </div>
        <div className="subtitle flex justify-center text-center">
          1分钟找到最适合你的四六级教材
        </div>
        <div className="ml-8 mr-8 mt-12" style={{ height: '45vh' }}>
          <Questionare />
        </div>
        <div className="bottom flex flex-col items-end absolute right-8 bottom-16 bold" style={{ color: '#8B9CFA' }}>
          <span className="font-light">
          @小红书：赵二一呀咿呀咿
          </span>
          <span className="font-light">
          关注我，了解更多四六级/考研小技巧
          </span>
        </div>
      </main>
    </div>
  );
}
