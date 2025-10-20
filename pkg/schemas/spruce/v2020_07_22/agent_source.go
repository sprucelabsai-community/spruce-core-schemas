package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeAgentSource(data map[string]interface{}) (*schemas.AgentSource, error) {
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