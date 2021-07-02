import json
import logging
import boto3
import os


logger = logging.getLogger()
logger.setLevel(logging.INFO)

client = boto3.client('firehose')

firehose_stream = os.environ['STREAM']


def handler(event, context):
    logger.info('## New invocation:')

    try:
        client.put_record(
            DeliveryStreamName=firehose_stream,
            Record={'Data': bytes(json.dumps(event) + '\n', 'utf-8')}

        )
        logger.info('Reading put successfully')
    except ValueError:
        logger.error('Could not put record on stream')
        logger.error(ValueError)

    return
