import postApi from "./api/postAPI";

async function main() {
    const queryParams = {
        _page: 1,
        _limit: 5,
    };

    const response = await postApi.getAll(queryParams);
    console.log(response);
}

main();
