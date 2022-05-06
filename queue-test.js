const issuingExtensions = require("@cko/issuing-acceptance-test-extensions").IntegrationTestLibrary;
const config = require('./config-dev');
const sqs = new issuingExtensions(config).Sqs;
const queueUrl = `${config.sqsConfig.ServiceURL}/${config.sqsConfig.queueName}`;
const msgHelper = require('./queque-test-helper');


async function run() {

    for (let index = 0; index < 5; index++) {
        let result = await sqs.sendMessage({
            QueueUrl: queueUrl,
            MessageBody: JSON.stringify(msgHelper.CreateMessage())
        })

        console.log(`Iteration : ${index + 1}`);
        console.log(result);
    }

}

run();

