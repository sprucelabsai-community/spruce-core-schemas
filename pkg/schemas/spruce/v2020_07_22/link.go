package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeLink(data map[string]any) (*schemas.Link, error) {
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