import {loadApi} from "../util/ApiUtil";

class NewsApi {
    async loadFeed() {
        return await loadApi(this.appApi, '/news/');
    }

    async loadFeedDetail(feedId) {
        return await loadApi('/news/detail/' + feedId);
    }
}

export default NewsApi