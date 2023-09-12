import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/navbarPage";
import Footer from "@/components/footer/footerPage";
import PostAuthor from "@/components/postAuthor";
import TwitterThread from "@/components/twitterThread";
// import CommentSection from "@/components/commentSection";
import RelatedPostImage from "../../assets/grid2.png";
import BlogImage from "../../assets/grid89.png";
import BlogImage2 from "../../assets/BlogIgImage.png";
import BlogImage3 from "../../assets/BlogIgImage2.png";
import RelatedPostImage2 from "../../assets/grid3.png";
import SocialMediaIcon from "@/components/socialMediaIcon";
import LeaveAComment from "@/components/leaveAComment";

function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const ImageData = [
    {
      image: RelatedPostImage,
      date: "8月8日、2023年",
      title: "イタリアで最もモダンな15の建物を発見",
    },
    {
      image: RelatedPostImage2,
      date: "8月6日、2023年",
      title: "建築のドーム",
    },
  ];
  return (
    <>
      <div className="flex w-full h-fit min-h-screen flex-col items-center justify-between px-20">
        {id}
        <Navbar />
        <div className="w-2/3 mt-[120px] h-fit flex flex-col items-start space-y-16">
          <span className="py-6 text-5xl inline-block self-center">
            インスピレーションと体験
          </span>
          <Image src={BlogImage} alt="woman in the room" />
          <div className="space-y-2 w-full h-fit flex flex-col">
            <span className="text-sm space-x-4 flex flex-row">
              <p className="text-orange-500">レビュー</p>
              <span>/</span>
              <p>2023年12月20日</p>
            </span>
            <span className="text-5xl">
              シンプルな家具と組み合わせた単色の使い方
            </span>
          </div>
          <div className="flex flex-col items-start space-y-8">
            <span className="text-[25px]">
              イギリスでのアーティストHenri
              Barandeの初の展示を記念して、グラフィックデザイナー
              <a href="#" className="hover:underline text-orange-500 px-1">
                Pavel Murren
              </a>
              とドイツのスタジオSchultzschultzが「The Lodge
              Wooden」を制作しました。
            </span>
            <span className="text-gray-700">
              最近、シンプルでモノトーンのカラースキームが、多くの家庭で人気を博しています。このトレンドの魅力は、シンプルなデザインと単色の使い方にあります。シンプルな家具を組み合わせた単色のインテリアは、清潔感があり、落ち着いた雰囲気を持っています。
            </span>
            <span className="text-gray-700">
              では、どのようにして単色のデザインを実現し、シンプルな家具と組み合わせるのでしょうか？
            </span>
          </div>
        </div>

        {/* 2 Foto Instagram */}
        <div className="w-full min-h-screen h-fit bg-white my-16 flex flex-row space-x-5">
          <div className="w-1/2 h-full flex flex-col justify-center items-center ">
            <Image
              src={BlogImage2}
              className="w-full h-full object-cover"
              alt="Instagram Image"
            />
            <span className="py-5 text-gray-700 italic text-sm">
              Images by
              <a href="#" className="hover:text-blue-400 text-black px-1 ">
                @tim_arterbury
              </a>
            </span>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center ">
            <Image
              src={BlogImage3}
              className="w-full h-full object-cover"
              alt="Instagram Image"
            />
            <span className="py-5 text-gray-700 italic text-sm">
              Images by
              <a href="#" className="hover:text-blue-400 text-black px-1 ">
                @tim_arterbury
              </a>
            </span>
          </div>
        </div>

        <div className="w-2/3 flex flex-col bg-white space-y-10">
          <span className="text text-gray-700 text-left">
            簡単な答えは「はい」です。Krossによれば、自分自身を他の人として考えることで、より客観的で役立つフィードバックを自分自身に与えることができます。
          </span>
          <TwitterThread />
          <div className="w-full bg-white flex flex-col space-y-8 my-20">
            <span className="text-3xl">デフォルトはマインドフルネスに</span>
            <span className="text-gray-700">
              まず最初に、部屋の中で主要なカラーとして使用したいカラーを選びます。望む雰囲気を反映するカラーパレットを選ぶことが重要です。たとえば、穏やかな雰囲気を作りたい場合は淡い青を、エネルギッシュな雰囲気を作りたい場合は明るい赤を選びます。その後、主要なカラーと調和する中立色の家具を選んだり、主要なカラーから明るい色や濃い色のバリエーションを使ったりします。
              主要なカラーを選んだら、それに調和するアクセントカラーを使用して視覚的に魅力的な要素を追加します。これはクッション、テーブルランプ、壁画、または他の小さなアクセサリーの形で表れるかもしれません。アクセントカラーは、全体のデザインのシンプルさを損なうことなく、微妙な対比を提供し、部屋に深みを加えます。
            </span>
            <span className="w-[90%] bg-white self-center">
              <ul class="list-disc text-gray-700">
                <li>適切なカラーパレットを選ぶ</li>
                <li>アクセントカラーに焦点を当てる：</li>
                <li> テクスチャーと素材を考慮する</li>
              </ul>
            </span>
            <span className="text-gray-700">
              基本的に一つのカラーを使用している場合でも、家具のテクスチャーや素材にバリエーションを取り入れることを検討してください。たとえば、布地のソファと木製のテーブルを組み合わせて、追加の立体感を演出します。また、クリーンなラインと幾何学的な形状を持つシンプルなデザインの家具も検討し、ミニマリストで魅力的な外観を作り出します。
            </span>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row space-x-2">
                <span className="px-[6px] py-1 border-[1px] border-gray-400 text-gray-700 text-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:cursor-pointer">
                  WordPress
                </span>
                <span className="px-[6px] py-1 border-[1px] border-gray-400 text-gray-700 text-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:cursor-pointer">
                  テーマ
                </span>
                <span className="px-[6px] py-1 border-[1px] border-gray-400 text-gray-700 text-sm hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:cursor-pointer">
                  アーキテクチャ
                </span>
              </div>
              <SocialMediaIcon />
            </div>
          </div>
          <span className="h-[1px] w-full bg-gray-400 m-y-4" />
          <PostAuthor />
          <span className="h-[1px] w-full bg-gray-400 m-y-4" />
          <div className="w-full flex flex-col my-8 bg-white mt-5">
            <span className="text-3xl py-3">関連記事</span>
            <div className="flex flex-row bg-white space-x-6">
              {ImageData.map((item, idx) => (
                <div
                  className="w-[95%] h-fit flex flex-col justify-between bg-white"
                  key={idx}
                >
                  <div className="w-full h-80">
                    <Image
                      src={item.image}
                      alt={item.image}
                      key={idx}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-1/2 flex flex-col justify-between py-8 space-y-3">
                    <span className="text-gray-600 text-sm">{item.date}</span>
                    <span className="text-2xl">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <span className="h-[1px] w-full bg-gray-400 m-y-4" />
          {/* <CommentSection /> */}
          {/* <span className="h-[1px] w-full bg-gray-400 m-y-4" /> */}
          <LeaveAComment />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogDetail;
