package v2020_07_22

// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.

import (
    "encoding/json"
    "github.com/sprucelabsai-community/spruce-core-schemas/v41/pkg/schemas"
)

func MakeSkillCreator(data map[string]any) (*schemas.SkillCreator, error) {
    var skillCreator schemas.SkillCreator

    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, err
    }

    err = json.Unmarshal(jsonData, &skillCreator)
    if err != nil {
        return nil, err
    }

    return &skillCreator, nil
}