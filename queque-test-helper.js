const uuid_encoding = require("./3rdParty/uuid-encoding.min.js");


function CreateMessage() {
    return {
        "Type": "Notification",
        "MessageId": "a3a749e9-de96-4a30-9554-3edd745086fe",
        "TopicArn": "arn:aws:sns:eu-west-1:000000000000:issuing-processing-events-cap-stub",
        "Message": JSON.stringify({
            "message_id": `${getRandomInt()}`,
            "card_id": "crd_dnip43ue3k2ujjfdsqlykw5ylm",
            "vault_id": "vid_ecu3h2hetl6exodhpuskggmzra",
            "transaction_id": "trx_czgdbo2b62ke3pxux5f2dn6enm",
            "assessment_id": "ass_dopyr2osgudung6xac442upbvu",
            "correlation_id": convertToGuid(generateUUID()),
            "created_on": {
                "seconds": 1651242655.202,
                "nanos": 0
            },
            "authorisation_message": {
                "card_number": "************0002",
                "processing_code": {
                    "cardholder_transaction_type_code": "Purchase",
                    "cardholder_from_account_type_code": "DefaultAccount",
                    "cardholder_to_account_type_code": "DefaultAccount"
                },
                "transaction_amount": "000000001300",
                "settlement_amount": "",
                "cardholder_billing_amount": "000000000010",
                "transmission_date_time": "0405095537",
                "settlement_conversion_rate": "",
                "cardholder_billing_conversion_rate": "76665778",
                "system_trace_audit_number": "000002",
                "local_transaction_time": "095537",
                "local_transaction_date": "0405",
                "expiration_date": "",
                "settlement_date": "0405",
                "conversion_date": "0405",
                "merchant_type": "9752",
                "primary_account_number_country_code": "",
                "point_of_service_entry_mode": {
                    "pos_terminal_pan_entry_mode": "PanAutoEntryViaChip",
                    "pos_terminal_pin_entry_mode": "TerminalHasPinEntryCapability"
                },
                "card_sequence_number": "000",
                "point_of_service_pin_capture_code": "04",
                "acquiring_institution_id_code": "012345",
                "forwarding_institution_id_code": "",
                "retrieval_reference_number": "085000100004",
                "authorisation_id_response": "03C0C0",
                "response_code_request": "Unknown",
                "response_code": "Approved",
                "card_acceptor_terminal_id": "12345678",
                "card_acceptor_id_code": "123456789123456",
                "card_acceptor_name_location": {
                    "name": "FIRST THIRD BANK ",
                    "city": "ST. LOUIS ",
                    "state_or_country_code": "MS"
                },
                "additional_response_data": "",
                "additional_data_private_use": {
                    "transaction_category_code": "R",
                    "routing_indicator": "",
                    "account_type_indicator": "",
                    "processor_pseudo_ica": "",
                    "authentication_indicator": "",
                    "cardholder_verification_method": "",
                    "cardless_atm_order_id": "",
                    "additional_pos_terminal_locations": "",
                    "token_transaction_identifier": "",
                    "mastercard_assigned_id": "",
                    "contactless_non_card_form_factor_request_response": "",
                    "account_category": "",
                    "universal_cardholder_authentication_field": "",
                    "visa3_d_secure_electronic_commerce_transaction_identifier": "",
                    "mastercard_payment_gateway_transaction_indicator": "",
                    "transaction_integrity_class": "",
                    "security_services_additional_data_for_issuers": [],
                    "on_behalf_services": [],
                    "issuer_chip_authentication": "",
                    "mastercard_electronic_acceptance_indicator": "",
                    "funding_payment_transaction_type_indicator": "",
                    "chip_cvr_tvr_bit_error_results": [],
                    "pin_service_code": "TV",
                    "address_verification_service_request": "",
                    "address_verification_service_response": "",
                    "relationship_participant_indicator": "",
                    "card_validation_code_result": "ValidCvc2",
                    "magnetic_stripe_compliance_status_indicator": "",
                    "magnetic_stripe_compliance_error_indicator": "",
                    "lodging_and_auto_rental_indicator": "",
                    "acquirer_reference_data_amex_transaction_id": "",
                    "commercial_card_inquiry": "",
                    "mastercard_promotion_code": "",
                    "visa_market_specific_data_identifier": "",
                    "prestigious_properties_indicator": "",
                    "mastercard_corporate_fleet_card_id_driver_number": "",
                    "mastercard_corporate_fleet_card_vehicle_number": "",
                    "cvc2": ""
                },
                "transaction_currency_code": "840",
                "settlement_currency_code": "",
                "cardholder_billing_currency_code": "826",
                "personal_id_number_data": "",
                "security_related_control_information": {
                    "pin_security_type_code": "97",
                    "pin_encryption_type_code": "01",
                    "pin_block_format_code": "10",
                    "pin_key_index_number": "0002"
                },
                "additional_amounts_request": [],
                "additional_amounts": [],
                "integrated_circuit_card_system_related_data": {
                    "application_cryptogram": "1BB62F52B1C490C4",
                    "cryptogram_information_data": {
                        "type_cryptogram": "AuthorisationRequestCryptogram",
                        "payment_system_cryptogram": "MastercardCryptogram",
                        "advice_required": false,
                        "reason_or_advice_code": "NoInformationGiven"
                    },
                    "issuer_application_data": {
                        "version_iss_app_data": "MChipAdvance",
                        "length": "",
                        "key_derivation_index": "01",
                        "crypto_version_number": {
                            "cryptogram_version": "0001",
                            "session_key_for_application_cryptogram": "EmvCsk",
                            "counters_included_in_application_cryptogram_computation": false
                        },
                        "card_verification_result": {
                            "application_cryptogram_returned_in_second_generate_ac": "SecondGenerateApplicationAuthenticationCryptogram",
                            "application_cryptogram_returned_in_first_generate_ac": "FirstGenerateAuthorisationRequestCryptogram",
                            "date_checked_failed": false,
                            "offline_pin_verification_performed": true,
                            "offline_encrypted_pin_verification_performed": false,
                            "offline_pin_verification_successful": true,
                            "dynamic_data_authentication_returned": false,
                            "combined_dda_or_ac_generation_returned_in_first_generate_ac": false,
                            "combined_dda_or_ac_generation_returned_in_second_generate_ac": false,
                            "issuer_authentication_performed": false,
                            "card_issuer_action_code_default_skipped_on_cardholder_activated_terminal": false,
                            "offline_change_pin_result": false,
                            "issuer_discretionary_value": "Value00",
                            "low_nibble_script_counter": "0",
                            "low_nibble_pin_try_counter": "0",
                            "last_online_transaction_not_completed": false,
                            "unable_to_go_online_indicated": false,
                            "offline_pin_verification_not_performed": false,
                            "offline_pin_verification_failed": false,
                            "pin_try_limit_exceeded": false,
                            "international_transaction": true,
                            "domestic_transaction": false,
                            "terminal_erroneously_considers_offline_pin_ok": false,
                            "lower_consecutive_counter1_limit_exceeded": false,
                            "upper_consecutive_counter1_limit_exceeded": true,
                            "lower_cumulative_accumulator1_limit_exceeded": false,
                            "upper_cumulative_accumulator1_limit_exceeded": false,
                            "go_online_on_next_transaction_was_set": false,
                            "issuer_authentication_failed": false,
                            "script_received": false,
                            "script_failed": false,
                            "lower_consecutive_counter2_limit_exceeded": false,
                            "upper_consecutive_counter2_limit_exceeded": false,
                            "lower_cumulative_accumulator2_limit_exceeded": false,
                            "upper_cumulative_accumulator2_limit_exceeded": false,
                            "maximum_transaction_amount_exceeded": false,
                            "number_of_days_offline_limit_exceeded": false,
                            "match_found_in_additional_check_table": false,
                            "no_match_found_in_additional_check_table": false
                        },
                        "data_authentication_code_or_integrated_circuit_card_dynamic_number": "DAC1",
                        "plaintext_or_encrypted_counters": "00000000000000000000000000000000",
                        "last_online_application_transaction_counter": "0010"
                    },
                    "unpredictable_number": "242C5967",
                    "application_transaction_counter": "02BB",
                    "terminal_verification_result": {
                        "offline_data_authentication_was_not_performed": false,
                        "static_data_authentication_failed": false,
                        "integrated_circuit_card_data_missing": false,
                        "dynamic_data_authentication_failed": false,
                        "card_appears_on_terminal_exception_file": false,
                        "combined_dynamic_data_authentication_and_application_cryptogram_generation_failed": false,
                        "static_data_authentication_selected": false,
                        "integrated_card_circuit_and_terminal_have_diff_application_version": false,
                        "expired_application": false,
                        "application_not_yet_effective": false,
                        "requested_service_not_allowed_for_card_product": false,
                        "new_card": false,
                        "cardholder_verification_was_not_successful": false,
                        "unrecognised_cardholder_verification_method": false,
                        "pin_try_limit_exceeded": false,
                        "pin_entry_required_and_pin_pad_not_present_or_not_working": false,
                        "pin_entry_required_and_pin_pad_present_but_pin_was_not_entered": false,
                        "online_pin_entered": true,
                        "transaction_exceeded_floor_limit": false,
                        "lower_consecutive_offline_limit_exceeded": false,
                        "upper_consecutive_offline_limit_exceeded": false,
                        "transaction_selected_randomly_for_online_processing": false,
                        "merchant_forced_transaction_online": false,
                        "default_transaction_certificate_data_object_list": false,
                        "issuer_authentication_failed": false,
                        "script_processing_failed_before_final_generate_application_cryptogram": false,
                        "script_processing_failed_after_final_generate_application_cryptogram": false,
                        "relay_resistance_threshold_exceeded": false,
                        "relay_resistance_limit_exceeded": false,
                        "relay_resistance_performed": "RelayResistanceNotSupported"
                    },
                    "transaction_date": "201001",
                    "transaction_type": "Purchase",
                    "amount_authorised": "000000000001",
                    "transaction_currency_code": "0840",
                    "application_interchange_profile": "5800",
                    "terminal_country_code": "0840",
                    "cardholder_verification_method_result": {
                        "cvm_performed": "SecondEncipheredPinVerifiedOnline",
                        "cvm_condition_code": "UnattendedCash",
                        "cvm_result_last_cvm_performed": "Unknown"
                    },
                    "terminal_capabilities": {
                        "manual_key_entry": true,
                        "magnetic_stripe": true,
                        "integrated_circuit_with_contact": true,
                        "plain_text_pin_for_icc_verification": true,
                        "enciphered_pin_for_online_verification": true,
                        "signature": true,
                        "enciphered_pin_for_offline_verification": false,
                        "no_cvm_required": true,
                        "static_data_authentication": true,
                        "dynamic_data_authentication": true,
                        "card_capture": true,
                        "combined_dynamic_data_authentication_and_application_cryptogram_generation": true
                    },
                    "dedicated_file_name": "A0000000041010",
                    "amount_other": "",
                    "application_pan_sequence_number": "",
                    "application_selection_registered_proprietary_data": "",
                    "terminal_type": "Unknown",
                    "interface_device_serial_number": "",
                    "transaction_category_code": "",
                    "terminal_application_version_number": "",
                    "transaction_sequence_counter": "",
                    "third_party_data": "",
                    "issuer_script_template1": [],
                    "issuer_script_template2": [
                        {
                            "script": "PinUnblockAndResetPinCounter",
                            "command": "",
                            "status": "StatusUknown",
                            "message_id": ""
                        },
                        {
                            "script": "InterfaceEnablingSwitch",
                            "command": "03",
                            "status": "StatusUknown",
                            "message_id": ""
                        }
                    ]
                },
                "point_of_service_data": {
                    "terminal_attendance": "UnattendedTerminal",
                    "terminal_location": "OnPremisesOfCardAcceptorFacility",
                    "cardholder_presence": "CardholderPresent",
                    "card_presence": "CardPresent",
                    "card_capture_capabilities": "NoTerminalOperatorCardCaptureCapability",
                    "transaction_status": "NormalRequest",
                    "transaction_security": "NoSecurityConcern",
                    "cardholder_activated_terminal_level": "AuthorizedLevel1CatAutomatedDispensingMachineWithPin",
                    "card_data_terminal_input_capability_indicator": "EmvContactChipInputAndMagneticStripeInput",
                    "authorisation_life_cycle": "00",
                    "country_code": "840",
                    "postal_code": "1111111111"
                },
                "intermediate_network_facility_data": "",
                "network_data": {
                    "financial_network_code": "MBP",
                    "banknet_reference_number": "095537482"
                },
                "account_id1": "",
                "account_id2": "",
                "authorising_agent_id_code": "",
                "new_pin_data": "",
                "private_data": ""
            },
            "card_verification_results": {
                "expiry_date_verification_result": "Valid",
                "service_code_verification_result": "Valid",
                "cvc1_verification_result": "Valid",
                "cvc2_verification_result": "Valid",
                "pin_verification_result": "Valid",
                "pvv_verification_result": "Valid",
                "application_cryptogram_response": {
                    "ac_verification_result": "Valid",
                    "plaintext_counters": ""
                }
            },
            "message_classification": {
                "transaction_type": "PurchaseOfGoodsAndServices",
                "transaction_acceptance_method": "ContactChip",
                "is_account_status_inquiry_transaction": false,
                "account_status_inquiry": "NotApplicable",
                "is_merchant_initiated_transaction": false,
                "authorisation_type": "NormalAuthorisation"
            }
        }),
        "Timestamp": "2022-04-29T14:30:57.533Z",
        "SignatureVersion": "1",
        "Signature": "EXAMPLEpH+..",
        "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-0000000000000000000000.pem",
        "MessageAttributes": {
            "message_type": {
                "Type": "String",
                "Value": "normal.authorisation.request.approved"
            }
        }
    };
}
function getRandomInt() {
    const min = 1;
    const max = Number.MAX_SAFE_INTEGER;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateUUID() {
    return uuid_encoding.uuid_encoding.Base32Guid.Create();
}

function convertToGuid(uuid) {
    return uuid_encoding.uuid_encoding.Base32Guid.Decode(uuid);
}


module.exports = {
    CreateMessage
}