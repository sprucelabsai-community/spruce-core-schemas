package v2025_10_19

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/schemas"
)

func MakeLink(data map[string]interface{}) (*schemas.Link, error) {
    var link schemas.Link

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &link)
    if err != nil {
        return nil, err
    }

    return &link, nil
}