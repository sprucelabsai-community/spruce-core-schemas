package v2020_07_22

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeMessageTarget(data map[string]interface{}) (*schemas.MessageTarget, error) {
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