package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeAgent(data map[string]any) (*schemas.Agent, error) {
    var agent schemas.Agent

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &agent)
    if err != nil {
        return nil, err
    }

    return &agent, nil
}