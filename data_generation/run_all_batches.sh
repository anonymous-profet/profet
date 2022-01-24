#!bin/bash
INSTANCE_TYPE=$1

sudo bash ./run_all_workload.sh $INSTANCE_TYPE profiling 16
sudo bash ./run_all_workload.sh $INSTANCE_TYPE profiling 32
sudo bash ./run_all_workload.sh $INSTANCE_TYPE profiling 64
sudo bash ./run_all_workload.sh $INSTANCE_TYPE profiling 128
sudo bash ./run_all_workload.sh $INSTANCE_TYPE profiling 256

sudo bash ./run_all_workload.sh $INSTANCE_TYPE latency 16
sudo bash ./run_all_workload.sh $INSTANCE_TYPE latency 32
sudo bash ./run_all_workload.sh $INSTANCE_TYPE latency 64
sudo bash ./run_all_workload.sh $INSTANCE_TYPE latency 128
sudo bash ./run_all_workload.sh $INSTANCE_TYPE latency 256
