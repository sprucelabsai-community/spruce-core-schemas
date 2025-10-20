package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeAgent(data map[string]interface{}) (*schemas.Agent, error) {
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