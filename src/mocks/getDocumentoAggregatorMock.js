export default {
    "response": {
        "code": "0",
        "message": "Operation get-aggregators completed with success.",
        "status": "SUCCESS"
    },
    "aggregator": {
        "subMenu": [
            {
                "code": "01",
                "mandatoryShowWeb": true,
                "documentTypes": [
                    {
                        "code": "ZEC_BFAVCO",
                        "description": "Avisos",
                        "includeFields": [
                            {
                                "elasticName": "ObjectId.raw",
                                "prefixCodes": [],
                                "name": "PolicyNumber"
                            },
                            {
                                "elasticName": "Custom05.raw",
                                "prefixCodes": [],
                                "name": "ReceiptNumber"
                            }
                        ]
                    },
                    {
                        "code": "ZEC_BFEFAC",
                        "description": "E-Fatura",
                        "includeFields": [
                            {
                                "elasticName": "Custom05.raw",
                                "prefixCodes": [
                                    "FT",
                                    "NC",
                                    "ND"
                                ],
                                "name": "ReceiptNumber"
                            }
                        ]
                    },
                    {
                        "code": "ZEC_BFDETP",
                        "description": "Detalhe de Prémio",
                        "includeFields": [
                            {
                                "elasticName": "ObjectId.raw",
                                "prefixCodes": [],
                                "name": "PolicyNumber"
                            },
                            {
                                "elasticName": "Custom05.raw",
                                "prefixCodes": [],
                                "name": "ReceiptNumber"
                            }
                        ]
                    },
                    {
                        "code": "ZEC_BFCAFP",
                        "description": "Notificação",
                        "includeFields": [
                            {
                                "elasticName": "ObjectId.raw",
                                "prefixCodes": [],
                                "name": "PolicyNumber"
                            },
                            {
                                "elasticName": "Custom05.raw",
                                "prefixCodes": [],
                                "name": "ReceiptNumber"
                            }
                        ]
                    }
                ],
                "description": "Recibos"
            }
        ],
        "menuCode": "RECEIPTS",
        "filterType": ""
    }
}