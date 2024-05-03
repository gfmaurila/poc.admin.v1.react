FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5075

ENV ASPNETCORE_URLS=http://+:5075
ENV DOTNET_NOLOGO=true
ENV DOTNET_CLI_TELEMETRY_OPTOUT=true

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /poc.cqrs.api.core.sqlserver.ef.net8/src/01-Presentation

# Copia o arquivo .csproj para o diret�rio de trabalho atual no cont�iner
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/01-Presentation/Poc.Core.API/Poc.Core.API.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/02-Application/Poc.Command/Poc.Command.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/03-Domain/Poc.Domain/Poc.Domain.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/02-Application/Poc.Query/Poc.Query.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/02-Application/Poc.Contract/Poc.Contract.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/04-Infrastructure/Database/Poc.SQLServer/Poc.SQLServer.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/04-Infrastructure/DistributedCache/Poc.DistributedCache/Poc.DistributedCache.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/04-Infrastructure/Integration/Poc.RabbiMQ/Poc.RabbiMQ.csproj .
COPY poc.cqrs.api.core.sqlserver.ef.net8/src/04-Infrastructure/Integration/Poc.Auth/Poc.Auth.csproj .

# Restaura as depend�ncias do projeto
RUN dotnet restore Poc.Core.API.csproj

# Copia o restante dos arquivos do projeto para o cont�iner
COPY . .

# Define o diret�rio de trabalho e constr�i o projeto
WORKDIR /poc.cqrs.api.core.sqlserver.ef.net8/src/01-Presentation
RUN dotnet build poc.cqrs.api.core.sqlserver.ef.net8/src/01-Presentation/Poc.Core.API/Poc.Core.API.csproj -c Release -o /app/build

FROM build AS publish
RUN dotnet publish poc.cqrs.api.core.sqlserver.ef.net8/src/01-Presentation/Poc.Core.API/Poc.Core.API.csproj -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Poc.Core.API.dll"]