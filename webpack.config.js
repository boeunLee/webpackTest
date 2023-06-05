const path = require('path'); //운영체제별로 상이한 경로 문법을 해결해 절대 경로로 반환하는 역할을 함
// const { webpack } = require('webpack');
const webpack = require('webpack');


module.exports = {
    mode: "development",
    entry:{
        main: path.resolve('./src/app.js')
    },
    output:{
        publicPath: '/webpack/dist/',
        //main.js라고 해도되긴함
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        // 여기서 로더를 추가할 수 있음
        rules: [
            {
                // 로더가 처리해야할 파일의 패턴(정규표현식)이다
				// 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미함
				// 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미함
                // test: /\.js$/, 
                // use: [
                //     // 위와 일치하는 패턴의 파일이 전달될 로더를 설정
                //     path.resolve('./myLoader.js')
                // ]

                ///css loader 등록
                test:/\.css$/,
                use:[
                    //실제 스타일이 적용되도록
                    //style-loader이 css-loader보다 위에 적히도록
                    'style-loader',
                    'css-loader'
                ]
            },
            // Base64 포멧으로 이미지 불러오기
            {
                test: /.(png|jpg|gif|svg)$/,
                type:'asset/inline'
            },
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner: `마지막 빌드 시간은  ${new Date().toLocaleString()} 입니다.`
        })
    ]
}