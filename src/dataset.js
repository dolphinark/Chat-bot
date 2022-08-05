const defaultDataset = {
    "init": {
        question: "こんにちは！🐯トラハックへのご用件はなんでしょうか？",
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "エンジニアのキャリアについて相談したい", nextId: "consultant"},
            {content: "学習コミュニティについて知りたい", nextId: "community"},
            {content: "お付き合いしたい", nextId: "dating"},
        ]
    },
    "job_offer": {
        question: "どのようなお仕事でしょうか？",
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
            {content: "その他", nextId: "other_jobs"}
        ]
    },
    "website": {
        question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "webapp": {
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "automation_tool": {
        question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "other_jobs": {
        question: "その他についてですね。コチラからお問い合わせできます。",
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "consultant": {
        question: "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。",
        answers: [
            {content: "YouTubeで動画を見る", nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
            {content: "学習コミュニティについて知りたい", nextId: "community"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "community": {
        question: "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
        answers: [
            {content: "どんな活動をしているの？", nextId: "community_activity"},
            {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "community_activity": {
        question: "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
        answers: [
            {content: "さらに詳細を知りたい", nextId: "https://youtu.be/tIzE7hUDbBM"},
            {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
    "dating": {
        question: "まずは一緒にランチでもいかがですか？DMしてください😘",
        answers: [
            {content: "DMする", nextId: "https://twitter.com/torahack_"},
            {content: "最初の質問に戻る", nextId: "init"}
        ]
    },
}

export default defaultDataset