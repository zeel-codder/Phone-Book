const getPageNumberData = (total, page_ask = 1, item_per_page_ask = 20) => {
    const res = {
        page: page_ask,
        item_per_page: item_per_page_ask,
        skip: 0,
        limit: item_per_page_ask,
        has_next: true,
    };

    if (item_per_page_ask > 50) {
        throw new Error(`${item_per_page_ask} must be <50`);
    }

    let total_page =
        Math.floor(total / item_per_page_ask) +
        (total % item_per_page_ask == 0 ? 0 : 1);

    console.log(total_page);
    if (page_ask >= total_page) {
        res.page = total_page;
        res.item_per_page =
            total % item_per_page_ask == 0
                ? item_per_page_ask
                : total % item_per_page_ask;
    }

    res.skip = item_per_page_ask * (res.page - 1);
    res.has_next = res.page != total_page;

    return res;
};

exports.getPageNumberData = getPageNumberData;
