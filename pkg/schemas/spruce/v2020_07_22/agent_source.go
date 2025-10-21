package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeAgentSource(data map[string]any) (*schemas.AgentSource, error) {
    var agentSource schemas.AgentSource

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &agentSource)
    if err != nil {
        return nil, err
    }

    return &agentSource, nil
}