iimport pandas as pd
import matplotlib.pyplot as plt

# 한글 깨짐 방지
from matplotlib import font_manager, rc
font_path = "C:\Windows\\Fonts\\NGULIM.TTF"
font = font_manager.FontProperties(fname=font_path).get_name()
rc('font', family=font)

def plot_countries(countries, data):
    # 데이터 읽어오기
    df = pd.read_csv(data)
    df["date"] = pd.to_datetime(df["date"])

    fig, (ax1, ax2) = plt.subplots(2, 1, sharex=True)  # 그래프 두 개를 한 figure 내에 그리기
    fig.subplots_adjust(hspace=0.05)  # 두 그래프 사이의 상하 간격 설정

    ax1.set_ylim(80000000, 1e8)  # 윗 부분 y축 범위 설정
    ax2.set_ylim(0, 10000000)  # 아랫 부분 y축 범위 설정
    
    # 그래프 경계선 제거
    ax1.spines['bottom'].set_visible(False)
    ax2.spines['top'].set_visible(False)
    ax1.xaxis.tick_top()
    ax1.tick_params(labeltop=False)
    ax2.xaxis.tick_bottom()

    for spot_ in countries:
        d_ = df[(df["location"] == spot_) & (df['date'].dt.month % 6 == 0) & (df["date"].dt.day == 15)]
        ax1.plot(d_["date"], d_["total_cases"], "-", label=str(spot_), alpha=0.6)
        ax2.plot(d_["date"], d_["total_cases"], "-", label=str(spot_), alpha=0.6)

    # 물결선 효과 마커 설정
    marker_style = dict(marker=[(-1, -0.5), (1, 0.5)], markersize=12,
                       linestyle="none", color='k', mec='k', mew=1, clip_on=False)

    # 상단 subplot에 물결선 효과 마커 표시
    ax1.plot([], [], **marker_style, label="Wave Marker")

    # 그래프 설정
    ax1.grid()
    ax2.grid()
    ax1.legend(fontsize=10, loc='upper left')
    ax2.legend(fontsize=10, loc='upper left')
    plt.xticks(rotation=90)

    # 두 subplot의 x축 공유
    plt.show()


# 특정 국가 목록을 사용하여 함수 호출
countries = ['아프가니스탄', '알바니아', '알제리','아메리칸사모아','안도라','앙골라','앵귈라', '앤티가 바부다', '아르헨티나',
              '아르메니아','아루바','호주', '오스트리아','아제르바이잔','바하마','바레인','방글라데시','바베이도스','벨라루스',
             '벨기에','벨리즈','베냉','버뮤다','부탄','볼리비아','보나르 신트 유스타티우스와 사바','보스니아 헤르체고비나',
             '보츠와나','브라질','영국령 버진아일랜드','브루나이','불가리아','부르키나파소','부룬디','캄보디아','카메룬','캐나다',
             '카보베르데','케이맨 제도','중앙아프리카공화국','차드','칠레','중국','콜롬비아','코모로','콩고','쿡 제도','코스타리카',
             '코트디부아르','크로아티아','쿠바','퀴라소','키프로스','체코','콩고 민주 공화국','덴마크','지부티','도미니카',
             '도미니카공화국','에콰도르','이집트','엘살바도르','잉글랜드','적도 기니','에리트레아','에스토니아','에스와티니',
             '에티오피아','페로스 제도','포클랜드 제도','피지','핀란드','프랑스','프랑스령 기아나','프랑스령 폴리네시아',
             '가봉','감비아','조지아','독일','가나','지브롤터','그리스','그린란드','그레나다','과들루프','괌','과테말라',
             '건지 섬','기니','기니비사우','가이아나','아이티','온두라스','홍콩','헝가리','아이슬란드','인도','인도네시아',
             '이란','이라크','아일랜드','맨섬','이스라엘','이탈리아','자메이카','일본','저지섬','요르단','카자흐스탄','케냐',
             '키리바시','코소보','쿠웨이트','키르기스스탄','라오스','라트비아','레바논','레소토','라이베리아','리비아','리히텐슈타인',
             '리투아니아','룩셈부르크','마카오','마다가스카르','말라위','말레이시아','몰디브','말리','몰타','마샬 군도',
             '마르티니크','모리타니아','모리셔스','마요트','멕시코','미크로네시아 연방','몰도바','모나코','몽골','몬테네그로',
             '몬세라트','모로코','모잠비크','미얀마','나미비아','나우루','네팔','네덜란드','누벨칼레도니','뉴질랜드','니카라과',
             '니제르','나이지리아','니우에','조선민주주의인민공화국','북마케도니아','북키프로스','북아일랜드','북마리아나 제도',
             '노르웨이','오만','파키스탄','팔라우','팔레스타인','파나마','파푸아뉴기니','파라과이','페루','필리핀','핏케언 제도',
             '폴란드','포르투갈','푸에르토리코','카타르','레위니옹','루마니아','러시아','르완다','생바르텔레미','세인트헬레나',
             '세인트키츠 네비스','세인트루시아','생마르탱','생피에르 미클롱','세인트빈센트 그레나딘','사모아','산마리노',
             '상투메 프린시페','사우디아라비아','스코틀랜드','세네갈','세르비아','세이셸','시에라리온','싱가포르','신트마르턴',
             '슬로바키아','슬로베니아','솔로몬 제도','소말리아','대한민국','남수단','스페인','스리랑카','수단','수리남',
             '스웨덴','스위스','시리아','대만','타지키스탄','탄자니아','태국','티모르','토고','토켈라우','통가','트리니다드 토바고',
             '튀니지','터키','투르크메니스탄','터크스 케이커스 제도','투발루','우간다','우크라이나','아랍에미리트','영국',
             '미국','미국령 버진아일랜드','우루과이','우즈베키스탄','바누아투','바티칸 시국','베네수엘라','베트남','웨일즈',
             '왈리스 푸투나','사하라사막','전세계','예멘','잠비아','짐바브웨']

plot_countries(countries, "최종 데이터.csv")
