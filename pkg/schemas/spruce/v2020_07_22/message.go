package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeMessage(data map[string]interface{}) (*schemas.Message, error) {
    var message schemas.Message

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &message)
    if err != nil {
        return nil, err
    }

    return &message, nil
}