package main

import (
	"context"
	"fmt"

	"github.com/Niser01/Arq_soft/tree/main/swarch_conectify/conectify_users_ms/DB"
	"github.com/Niser01/Arq_soft/tree/main/swarch_conectify/conectify_users_ms/internal/api"
	"github.com/Niser01/Arq_soft/tree/main/swarch_conectify/conectify_users_ms/internal/views"
	"github.com/Niser01/Arq_soft/tree/main/swarch_conectify/conectify_users_ms/settings"
	"github.com/labstack/echo/v4"
	"go.uber.org/fx"
)

func main() {
	app := fx.New(
		fx.Provide(
			context.Background,
			settings.New,
			DB.New,
			views.New,
			api.New,
			echo.New,
		),
		fx.Invoke(
			setLifeCycle,
		),
	)

	app.Run()
}

func setLifeCycle(lc fx.Lifecycle, a *api.API, s *settings.Settings, e *echo.Echo) {
	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			address := fmt.Sprintf(":%s", s.Port)
			go a.Start(e, address)
			return nil
		},
		OnStop: func(ctx context.Context) error {
			return nil
		},
	})
}
