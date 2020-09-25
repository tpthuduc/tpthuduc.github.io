import AppUtils from "../util/AppUtils"

class NewsApi {
    appApi = new AppUtils()
    constructor(params) {
        // this.appApi.baseUrl = 'http://localhost:4000/api'
        this.appApi.baseUrl = process.env.API_URL
    }

    async loadFeed() {
            return await this.appApi.loadApi('/news/');
        }

    async loadFeedDetail(feedId) {
        return await this.appApi.loadApi('/news/detail/'+ feedId);
    }
}

export default NewsApi