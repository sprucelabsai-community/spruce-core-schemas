package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeMessageSource(data map[string]interface{}) (*schemas.MessageSource, error) {
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