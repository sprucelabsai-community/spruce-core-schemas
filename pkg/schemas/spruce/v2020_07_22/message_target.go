package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeMessageTarget(data map[string]any) (*schemas.MessageTarget, error) {
    var messageTarget schemas.MessageTarget

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &messageTarget)
    if err != nil {
        return nil, err
    }

    return &messageTarget, nil
}