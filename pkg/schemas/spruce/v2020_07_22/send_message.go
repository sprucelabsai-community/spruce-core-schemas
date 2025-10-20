package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeSendMessage(data map[string]interface{}) (*schemas.SendMessage, error) {
    var sendMessage schemas.SendMessage

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &sendMessage)
    if err != nil {
        return nil, err
    }

    return &sendMessage, nil
}