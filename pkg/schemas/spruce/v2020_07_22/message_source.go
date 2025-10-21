package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeMessageSource(data map[string]any) (*schemas.MessageSource, error) {
    var messageSource schemas.MessageSource

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &messageSource)
    if err != nil {
        return nil, err
    }

    return &messageSource, nil
}