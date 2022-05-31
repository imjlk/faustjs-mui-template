import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Footer, Header, Hero, ScrollContents } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;

  const scrollContents: Array<{
    bgImage: (index: number) => string;
    text: string;
  }> = [
    {
      bgImage: (i) => `https://source.unsplash.com/random/${i}`,
      text: '소담스러운 끝까지 산야에 얼마나 거친 이것이야말로 이상이 어디 사막이다. 영원히 수 생의 쓸쓸하랴? 이상이 든 귀는 못하다 설레는 얼음이 있을 무엇을 뛰노는 있으랴? 너의 무엇을 싹이 황금시대를 보이는 것이 꽃이 것이다. 구하지 생의 사랑의 가슴이 뛰노는 창공에 위하여서 천지는 봄바람이다. 얼마나 청춘 싶이 있는 장식하는 황금시대다. 웅대한 이상을 붙잡아 그들의 것이다. 그러므로 장식하는 안고, 있는 이것이다. 사랑의 인생의 못하다 인도하겠다는 가장 심장은 듣기만 쓸쓸하랴? 얼마나 유소년에게서 그들을 청춘 사라지지 꾸며 이것이다.',
    },
    {
      bgImage: (i) => `https://source.unsplash.com/random/${i}`,
      text: '유소년에게서 피는 무엇을 현저하게 곧 생명을 지혜는 사막이다. 창공에 열매를 것이다.보라, 보는 수 동력은 위하여서.',
    },
    {
      bgImage: (i) => `https://source.unsplash.com/random/${i}`,
      text: '따뜻한 구하기 풍부하게 천자만홍이 청춘의 이것이다. 인간의 곳으로 위하여 인간의 작고 얼마나 이것이다. 목숨을 것은 커다란 산야에 평화스러운 바로 붙잡아 싶이 부패뿐이다. 이상은 그러므로 일월과 물방아 꽃이 넣는 너의 있는가? 시들어 옷을 우리 미묘한 바이며, 무엇이 용감하고 꾸며 가치를 있으랴? 튼튼하며, 같으며, 이상의 있는 꽃 우리 구할 위하여서. 힘차게 그와 가치를 피가 이것이다.',
    },
    {
      bgImage: (i) => `https://source.unsplash.com/random/${i}`,
      text: '듣기만 이상을 있는 인간의 것은 영원히 이상은 용기가 있다. 불어 능히 이 있는 용기가 사막이다. 싶이 할지라도 유소년에게서 있으랴? 긴지라 심장의 인생을 새가 맺어, 청춘에서만 유소년에게서 청춘이 튼튼하며, 이것이다. 길을 찾아다녀도, 없으면, 그들의 그들은 인생을 낙원을 말이다. 품으며, 눈이 되는 있으랴? 남는 불러 찾아다녀도, 생명을 미묘한 청춘에서만 우리의 그리하였는가?',
    },
    {
      bgImage: (i) => `https://source.unsplash.com/random/${i}`,
      text: '이름자 위에 나의 하나에 쓸쓸함과 것은 이름과, 아무 까닭입니다. 아름다운 나는 피어나듯이 이름을 까닭입니다. 풀이 지나고 당신은 했던 남은 패, 어머니, 계십니다. 추억과 다하지 위에 애기 새워 청춘이 벌레는 계십니다. 멀리 하나의 가을 다하지 하나에 옥 까닭입니다. 그러나 이름을 이름과, 까닭입니다.',
    },
  ];

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Short Page - {generalSettings.title}</title>
      </Head>

      <Hero title='Short Page' />

      <main className='content content-single'>
        <div className='wrap' style={{ overflow: 'unset' }}>
          {/* bg image 섹션 visible 처리,  */}
          <ScrollContents data={scrollContents} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
