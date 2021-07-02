const AWS = require("aws-sdk");

// Todo Get accountID and region from env
const region = process.env.AWS_REGION;
const accountId = process.env.AWS_ACCOUNT_ID;

var quicksight = new AWS.QuickSight({
  region,
});

exports.handler = async () => {
  console.log("invoked");

  const getDashboardParams = {
    AwsAccountId: accountId,
    DashboardId: "d366ea06-cc3b-4bc2-9823-c9279702cc3c", // How to inject..?
    IdentityType: "ANONYMOUS",
    Namespace: "default",
  };

  console.log("params: ", getDashboardParams);

  let body;

  try {
    const resp = await quicksight
      .getDashboardEmbedUrl(getDashboardParams)
      .promise();
    console.log("resp: ", resp);
    body = JSON.stringify({
      message: resp.EmbedUrl,
    });
  } catch (err) {
    console.log("Error");
    console.error(err);
    return;
  }

  let response = {
    statusCode: 200,
    body,
  };

  response.headers = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,GET,POST",
  };

  return response;
};
