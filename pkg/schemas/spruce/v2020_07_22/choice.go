package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeChoice(data map[string]any) (*schemas.Choice, error) {
    var choice schemas.Choice

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &choice)
    if err != nil {
        return nil, err
    }

    return &choice, nil
}