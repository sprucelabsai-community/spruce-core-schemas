package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeSendMessage(data map[string]any) (*schemas.SendMessage, error) {
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