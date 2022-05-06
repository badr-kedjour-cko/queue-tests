const fs = require("fs");

module.exports = {
    "env": "qa",
    "awsConnectionParam": {
        "region": "eu-west-1",
        "httpOptions": {
            "timeout": 60000,
            "connectTimeout": 5000
        }
    },
    "sqsConfig": {
        "apiVersion": "2012-11-05",
        "ServiceURL": "https://sqs.eu-west-1.amazonaws.com/711533748762",
        "queueName": "issuing-risk-and-fraud-transactions-events"
    }
};
